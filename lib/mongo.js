const config = require('config-lite')(__dirname);
const Mongolass = require('mongolass');
const mongolass = new Mongolass();
mongolass.connect(config.mongodb);
const moment = require('moment');
const objectIdToTimestamp = require('objectid-to-timestamp');

//create time based on id creation
mongolass.plugin('addCreateAt', {
    afterFind: function (results) {
        results.forEach(function (item) {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('MM-DD-YYYY HH:mm')
        });
        return results;
    },
    afterFindOne: function (result) {
        if(result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('MM-DD-YYYY HH:mm')
        }
        return result;
    }
});

exports.User = mongolass.model('User',{
    name:{ type: 'string', required: true },
    password:{ type: 'string', required: true },
    avatar:{ type: 'string', required: true },
    gender:{ type: 'string', enum: ['female', 'male', 'none'], default: 'none' },
    bio:{ type: 'string', required: true}
});
exports.User.index({ name: 1 }, { unique : true }).exec();//find user based on user name, global unique
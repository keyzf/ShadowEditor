import BaseEvent from '../BaseEvent';
import XType from '../../ui/XType';

/**
 * 路径模式事件
 * @param {*} app 
 */
function PathModeEvent(app) {
    BaseEvent.call(this, app);
}

PathModeEvent.prototype = Object.create(BaseEvent.prototype);
PathModeEvent.prototype.constructor = PathModeEvent;

PathModeEvent.prototype.start = function () {

};

PathModeEvent.prototype.stop = function () {

};

export default PathModeEvent;
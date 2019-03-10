import UI from '../../ui/UI';

/**
 * 启动菜单
 * @author tengge / https://github.com/tengge1
 * @param {*} options 
 */
function PlayMenu(options) {
    UI.Control.call(this, options);
    this.app = options.app;
    this.isPlaying = false;
}

PlayMenu.prototype = Object.create(UI.Control.prototype);
PlayMenu.prototype.constructor = PlayMenu;

PlayMenu.prototype.render = function () {
    var container = UI.create({
        xtype: 'div',
        parent: this.parent,
        cls: 'menu',
        children: [{
            id: 'mPlay',
            xtype: 'div',
            cls: 'title',
            html: L_PLAY,
            onClick: this.onTogglePlay.bind(this),
        }, , {
            xtype: 'div',
            cls: 'options',
            children: [{
                xtype: 'div',
                cls: 'option',
                html: '播放',
                onClick: this.onTogglePlay.bind(this),
            }, {
                xtype: 'div',
                cls: 'option',
                html: '全屏播放',
                onClick: this.playFullscreen.bind(this),
            }, {
                xtype: 'div',
                cls: 'option',
                html: '新窗口播放',
                onClick: this.playNewWindow.bind(this),
            }]
        }]
    });

    container.render();
}

PlayMenu.prototype.onTogglePlay = function () {
    var editor = this.app.editor;

    if (this.isPlaying === false) {
        this.isPlaying = true;
        UI.get('mPlay').dom.innerHTML = L_STOP;
        this.startPlayer();
    } else {
        this.isPlaying = false;
        UI.get('mPlay').dom.innerHTML = L_PLAY;
        this.stopPlayer();
    }
};

PlayMenu.prototype.startPlayer = function () { // 启动播放器
    this.app.player.start();
};

PlayMenu.prototype.stopPlayer = function () { // 停止播放器
    this.app.player.stop();
};

PlayMenu.prototype.playFullscreen = function () { // 全屏播放
    UI.msg('全屏播放！');
};

PlayMenu.prototype.playNewWindow = function () { // 新窗口播放
    UI.msg('新窗口播放！');
};

export default PlayMenu;
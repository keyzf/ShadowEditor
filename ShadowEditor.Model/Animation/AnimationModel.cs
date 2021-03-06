﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShadowEditor.Model.Animation
{
    /// <summary>
    /// 动画模型
    /// </summary>
    public class AnimationModel
    {
        /// <summary>
        /// ID
        /// </summary>
        public string ID { get; set; }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 类别ID
        /// </summary>
        public string CategoryID { get; set; }

        /// <summary>
        /// 类别名称
        /// </summary>
        public string CategoryName { get; set; }

        /// <summary>
        /// 全拼
        /// </summary>
        public string TotalPinYin { get; set; }

        /// <summary>
        /// 首字母拼音
        /// </summary>
        public string FirstPinYin { get; set; }

        /// <summary>
        /// 类型
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// 下载地址
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// 上传文件名称
        /// </summary>
        public string FileName { get; set; }

        /// <summary>
        /// 文件大小
        /// </summary>
        public int FileSize { get; set; }

        /// <summary>
        /// 文件类型
        /// </summary>
        public string FileType { get; set; }

        /// <summary>
        /// 保存文件名称
        /// </summary>
        public string SaveName { get; set; }

        /// <summary>
        /// 保存路径
        /// </summary>
        public string SavePath { get; set; }

        /// <summary>
        /// 上传时间
        /// </summary>
        public DateTime AddTime { get; set; }

        /// <summary>
        /// 缩略图
        /// </summary>
        public string Thumbnail { get; set; }
    }
}

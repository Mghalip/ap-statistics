# AP Statistics 课程资料站

静态网站，课件和样式均存放在本站，无需学生登录，无外部字体或脚本依赖。

## 发布到 GitHub Pages

将本目录内容上传到公开仓库。在 Settings → Pages 中选择 Deploy from a branch，分支 main，目录 / (root)，保存。

## 更新课件

将 PDF 上传到 materials/，在 index.html 中复制一条 article.material，更新标题、文件链接、页数及大小。两个链接分别用于预览和下载。提交后等待 Pages 更新。

大纲网页为 course-map.html；原始对照文件为 materials/course-map.md。更新大纲时同步修改两者。

课件编号沿用原文件编号，不等同于 2026 CED 单元编号。仓库内文件均公开，未准备发布的答案不要上传。

## 抽样分布模拟器

1. [样本比例的抽样分布](https://mghalip.github.io/ap-statistics/sampling.html#proportion)
2. [样本比例的差值的抽样分布](https://mghalip.github.io/ap-statistics/sampling.html#proportion-difference)
3. [样本均值的抽样分布](https://mghalip.github.io/ap-statistics/sampling.html#mean)
4. [样本均值的差值的抽样分布](https://mghalip.github.io/ap-statistics/sampling.html#mean-difference)

## 普通统计（Regular Statistics）分区

独立入口：`regular/index.html`（线上访问 `https://stats.mgpreplab.com/regular/`），包含「练习与答案」「互动模拟器」「课程大纲（13 个单元）」三个标签页，视觉与资源完全独立于 AP Statistics。

- **更新课堂练习与作业本答案**：将 PDF 放到 `regular/materials/`，并在 `regular/data.js` 的 `materials` 数组中按示例格式添加条目即可（支持课堂练习 `classwork` 与作业本答案 `workbook`）。
- **新增普通统计互动模拟器**：将 HTML 放到 `regular/simulators/`，并在 `regular/data.js` 的 `simulators` 数组中登记一条记录；若对应大纲中的某一节课，可在 `syllabus` 对应 lesson 上加上 `simulatorId` 自动关联。

/* Regular Statistics (普通统计) — single source of truth data manifest
   更新课堂练习、作业本答案或新模拟器时，只需按下方格式在本文件追加条目。 */

window.MG_REGULAR_STATS = {
  updatedAt: '2026-11-27',

  /**
   * 互动模拟器清单（按上线顺序或教学进度排列，最新可设 isNew: true）
   */
  simulators: [
    {
      id: 'barbie-bungee',
      unit: 'unit-3',
      unitNum: 3,
      unitLabel: 'Unit 3 · Lesson 3.1',
      titleZh: '芭比蹦极模拟器',
      titleEn: 'Barbie Bungee — Scatterplots',
      desc: '给芭比绑上不同数量的橡皮筋从高台跳下，亲手收集下落距离数据并实时绘制散点图，用方向、形式、强度与异常点描述双变量关系。',
      tags: ['Unit 3 双变量数据', '散点图 Scatterplot', 'Classnote 3.1', '含 Star Wars 练习'],
      path: 'simulators/barbie-bungee.html',
      isNew: true,
      updatedLabel: '新上线 · 11/27',
      symbol: 'r',
      svg: `<svg viewBox="0 0 260 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="28" y1="94" x2="232" y2="94" stroke="#21242C" stroke-width="1.4" stroke-opacity="0.28"/>
        <line x1="28" y1="16" x2="28" y2="94" stroke="#21242C" stroke-width="1.4" stroke-opacity="0.28"/>
        <line x1="28" y1="24" x2="232" y2="24" stroke="#C5221F" stroke-width="1.4" stroke-dasharray="5 4" stroke-opacity="0.72"/>
        <line x1="36" y1="86" x2="216" y2="26" stroke="#008A6E" stroke-width="2" stroke-dasharray="4 3" stroke-opacity="0.58"/>
        <circle cx="48" cy="82" r="4.5" fill="#008A6E"/>
        <circle cx="72" cy="73" r="4.5" fill="#008A6E"/>
        <circle cx="96" cy="67" r="4.5" fill="#008A6E"/>
        <circle cx="120" cy="57" r="4.5" fill="#008A6E"/>
        <circle cx="144" cy="51" r="4.5" fill="#008A6E"/>
        <circle cx="168" cy="40" r="4.5" fill="#008A6E"/>
        <circle cx="192" cy="34" r="4.5" fill="#008A6E"/>
        <circle cx="212" cy="24" r="4.8" fill="#C5221F" stroke="#FFFFFF" stroke-width="1.4"/>
      </svg>`
    }
  ],

  /**
   * 课堂练习与作业本答案清单（PDF 放进 regular/materials/ 后在此登记即可自动渲染）
   *
   * 示例格式：
   * {
   *   id: 'u3-1-classwork',
   *   unit: 'unit-3',
   *   unitNum: 3,
   *   date: '11/27',
   *   kind: 'classwork', // 'classwork'（课堂练习）或 'workbook'（作业本答案）
   *   titleEn: 'Lesson 3.1 Scatterplots',
   *   titleZh: '3.1 散点图课堂练习',
   *   desc: '课堂练习 · 双变量定量数据与散点图描述',
   *   updated: true,
   *   updatedLabel: '近期更新 · 11/27',
   *   simulatorId: 'barbie-bungee', // 可选：关联对应的互动模拟器
   *   files: [
   *     { label: '练习', href: 'materials/classnote-3-1.pdf', download: 'Classnote 3.1 Scatterplots.pdf', isAk: false },
   *     { label: '答案（AK）', href: 'materials/classnote-3-1-ak.pdf', download: 'Classnote 3.1 Scatterplots AK.pdf', isAk: true }
   *   ]
   * }
   */
  materials: [
    // Unit 3（当前进度：3.1）
    {
      id: 'u3-1-classwork',
      unit: 'unit-3',
      unitNum: 3,
      date: '3.1',
      kind: 'classwork',
      titleEn: 'Scatterplots',
      titleZh: '散点图与双变量关系描述',
      desc: '当前进度 · 课堂笔记与练习 · 含完整答案（AK）',
      updated: true,
      updatedLabel: '当前进度',
      simulatorId: 'barbie-bungee',
      files: [
        { label: '课堂练习', href: 'materials/classnote-3-1.pdf', download: 'Classnote 3.1 Scatterplots.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-3-1-ak.pdf', download: 'Classnote 3.1 Scatterplots AK.pdf', isAk: true }
      ]
    },

    // Unit 2 · Modeling Data（2.5 → 2.1）
    {
      id: 'u2-5-classwork',
      unit: 'unit-2',
      unitNum: 2,
      date: '2.5',
      kind: 'classwork',
      titleEn: 'Normal Distribution Calculations',
      titleZh: '正态分布概率与分位数计算',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-2-5.pdf', download: 'Classnote 2.5 Normal Distribution Calculations.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-2-5-ak.pdf', download: 'Classnote 2.5 Normal Distribution Calculations AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u2-4-classwork',
      unit: 'unit-2',
      unitNum: 2,
      date: '2.4',
      kind: 'classwork',
      titleEn: 'Normal Distributions and the Empirical Rule',
      titleZh: '正态分布与经验法则（68-95-99.7）',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-2-4.pdf', download: 'Classnote 2.4 Normal Distributions and the Empirical Rule.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-2-4-ak.pdf', download: 'Classnote 2.4 Normal Distributions and the Empirical Rule AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u2-3-classwork',
      unit: 'unit-2',
      unitNum: 2,
      date: '2.3',
      kind: 'classwork',
      titleEn: 'Linear Transformations of Quantitative Data',
      titleZh: '定量数据的线性变换',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-2-3.pdf', download: 'Classnote 2.3 Linear Transformations of Quantitative Data.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-2-3-ak.pdf', download: 'Classnote 2.3 Linear Transformations of Quantitative Data AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u2-2-classwork',
      unit: 'unit-2',
      unitNum: 2,
      date: '2.2',
      kind: 'classwork',
      titleEn: 'Location in a Distribution',
      titleZh: '分布中的相对位置与 z 分数',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-2-2.pdf', download: 'Classnote 2.2 Location in a Distribution.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-2-2-ak.pdf', download: 'Classnote 2.2 Location in a Distribution AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u2-1-classwork',
      unit: 'unit-2',
      unitNum: 2,
      date: '2.1',
      kind: 'classwork',
      titleEn: 'Percentile',
      titleZh: '百分位数',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-2-1.pdf', download: 'Classnote 2.1 Percentile.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-2-1-ak.pdf', download: 'Classnote 2.1 Percentile AK.pdf', isAk: true }
      ]
    },

    // Unit 1 · Analyzing Data（1.5 → 1.1）
    {
      id: 'u1-5-classwork',
      unit: 'unit-1',
      unitNum: 1,
      date: '1.5',
      kind: 'classwork',
      titleEn: 'Comparing Quantitative Data',
      titleZh: '多组定量数据分布比较与箱线图',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-1-5.pdf', download: 'Classnote 1.5 Comparing Quantitative Data.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-1-5-ak.pdf', download: 'Classnote 1.5 Comparing Quantitative Data AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u1-4-classwork',
      unit: 'unit-1',
      unitNum: 1,
      date: '1.4',
      kind: 'classwork',
      titleEn: 'Measuring Variability',
      titleZh: '离散程度的度量（标准差与四分位距）',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-1-4.pdf', download: 'Classnote 1.4 Measuring Variability.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-1-4-ak.pdf', download: 'Classnote 1.4 Measuring Variability AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u1-3-classwork',
      unit: 'unit-1',
      unitNum: 1,
      date: '1.3',
      kind: 'classwork',
      titleEn: 'Describing Quantitative Data',
      titleZh: '定量数据的分布描述',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-1-3.pdf', download: 'Classnote 1.3 Describing Quantitative Data.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-1-3-ak.pdf', download: 'Classnote 1.3 Describing Quantitative Data AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u1-2-classwork',
      unit: 'unit-1',
      unitNum: 1,
      date: '1.2',
      kind: 'classwork',
      titleEn: 'Representing Categorical Data',
      titleZh: '分类数据的图表展示',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-1-2.pdf', download: 'Classnote 1.2 Representing Categorical Data.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-1-2-ak.pdf', download: 'Classnote 1.2 Representing Categorical Data AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u1-1-classwork',
      unit: 'unit-1',
      unitNum: 1,
      date: '1.1',
      kind: 'classwork',
      titleEn: 'Analyzing Categorical Data',
      titleZh: '分类数据分析',
      desc: '课堂笔记与补充练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-1-1.pdf', download: 'Classnote 1.1 Analyzing Categorical Data Extra 2.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-1-1-ak.pdf', download: 'Classnote 1.1 Analyzing Categorical Data AK.pdf', isAk: true }
      ]
    },

    // Unit 4 · Collecting Data（4.9 → 4.1，第一阶段授课单元）
    {
      id: 'u4-9-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.9',
      kind: 'classwork',
      titleEn: 'Scope of Inference',
      titleZh: '统计推断的适用范围（推广与因果）',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-9.pdf', download: 'Classnote 4.9 Scope of Inference.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-9-ak.pdf', download: 'Classnote 4.9 Scope of Inference AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-8-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.8',
      kind: 'classwork',
      titleEn: 'Inference and Experiments',
      titleZh: '实验结果与统计显著性初步推断',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-8.pdf', download: 'Classnote 4.8 Inference and Experiments.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-8-ak.pdf', download: 'Classnote 4.8 Inference and Experiments AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-7-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.7',
      kind: 'classwork',
      titleEn: 'Selecting an Experimental Design',
      titleZh: '完全随机、区组与配对实验设计',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-7.pdf', download: 'Classnote 4.7 Selecting an Experimental Design.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-7-ak.pdf', download: 'Classnote 4.7 Selecting an Experimental Design AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-6-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.6',
      kind: 'classwork',
      titleEn: 'Designing Experiments',
      titleZh: '实验设计基本原则（对照、随机、重复）',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-6.pdf', download: 'Classnote 4.6 Designing Experiments.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-6-ak.pdf', download: 'Classnote 4.6 Designing Experiments AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-5-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.5',
      kind: 'classwork',
      titleEn: 'Observational Studies and Experiments',
      titleZh: '观察性研究与控制实验',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-5.pdf', download: 'Classnote 4.5 Observational Studies and Experiments.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-5-ak.pdf', download: 'Classnote 4.5 Observational Studies and Experiments AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-4-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.4',
      kind: 'classwork',
      titleEn: 'Potential Problems with Sampling',
      titleZh: '抽样中的潜在偏差与问题',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-4.pdf', download: 'Classnote 4.4 Potential Problems with Sampling.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-4-ak.pdf', download: 'Classnote 4.4 Potential Problems with Sampling AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-3-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.3',
      kind: 'classwork',
      titleEn: 'Cluster and Systematic Samples',
      titleZh: '整群抽样与系统抽样',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-3.pdf', download: 'Classnote 4.3 Cluster and Systematic Samples.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-3-ak.pdf', download: 'Classnote 4.3 Cluster and Systematic Samples AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-2-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.2',
      kind: 'classwork',
      titleEn: 'Stratified Random Samples',
      titleZh: '分层随机抽样',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-2.pdf', download: 'Classnote 4.2 Stratified Random Samples.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-2-ak.pdf', download: 'Classnote 4.2 Stratified Random Samples AK.pdf', isAk: true }
      ]
    },
    {
      id: 'u4-1-classwork',
      unit: 'unit-4',
      unitNum: 4,
      date: '4.1',
      kind: 'classwork',
      titleEn: 'Simple Random Sample',
      titleZh: '简单随机抽样（SRS）',
      desc: '课堂笔记与练习 · 含完整答案（AK）',
      files: [
        { label: '课堂练习', href: 'materials/classnote-4-1.pdf', download: 'Classnote 4.1 Simple Random Sample.pdf', isAk: false },
        { label: '答案（AK）', href: 'materials/classnote-4-1-ak.pdf', download: 'Classnote 4.1 Simple Random Sample AK.pdf', isAk: true }
      ]
    }
  ],

  /**
   * 普通统计课程大纲（13 个教学单元，与课堂笔记与作业编号完全一致）
   */
  syllabus: [
    {
      unit: 'unit-1',
      unitNum: 1,
      title: 'Unit 1 · Analyzing Data',
      sub: '单变量数据分析与图形展示',
      lessons: [
        { code: '1.1', en: 'Analyzing Categorical Data', zh: '分类数据分析' },
        { code: '1.2', en: 'Representing Categorical Data', zh: '分类数据的图表展示' },
        { code: '1.3', en: 'Describing Quantitative Data', zh: '定量数据的分布描述' },
        { code: '1.4', en: 'Measuring Variability', zh: '离散程度的度量（标准差与四分位距）' },
        { code: '1.5', en: 'Comparing Quantitative Data', zh: '多组定量数据分布比较与箱线图' }
      ]
    },
    {
      unit: 'unit-2',
      unitNum: 2,
      title: 'Unit 2 · Modeling Data',
      sub: '数据位置、线性变换与正态分布建模',
      lessons: [
        { code: '2.1', en: 'Percentile', zh: '百分位数' },
        { code: '2.2', en: 'Location in a Distribution', zh: '分布中的相对位置与 z 分数' },
        { code: '2.3', en: 'Linear Transformations of Quantitative Data', zh: '定量数据的线性变换' },
        { code: '2.4', en: 'Normal Distributions and the Empirical Rule', zh: '正态分布与经验法则（68-95-99.7）' },
        { code: '2.5', en: 'Normal Distribution Calculations', zh: '正态分布概率与分位数计算' }
      ]
    },
    {
      unit: 'unit-3',
      unitNum: 3,
      title: 'Unit 3 · Two-Variable Data',
      sub: '双变量数据、相关性与最小二乘回归',
      lessons: [
        { code: '3.1', en: 'Scatterplots', zh: '散点图与双变量关系描述', simulatorId: 'barbie-bungee' },
        { code: '3.2', en: 'Correlation', zh: '相关系数 r 的含义与性质' },
        { code: '3.3', en: 'Making Predictions', zh: '回归直线与预测' },
        { code: '3.4', en: 'Residual Plots', zh: '残差与残差图分析' },
        { code: '3.5', en: 'Outliers, High-Leverage, and Influential Points', zh: '异常点、高杠杆点与强影响点' },
        { code: '3.6', en: 'Transforming Non-linear Data', zh: '非线性数据的变量变换' },
        { code: '3.7', en: 'Choosing the Best Model', zh: '模型拟合优度评估与最佳模型选择' }
      ]
    },
    {
      unit: 'unit-4',
      unitNum: 4,
      title: 'Unit 4 · Collecting Data',
      sub: '抽样方法、调查偏差与实验设计',
      lessons: [
        { code: '4.1', en: 'Simple Random Sample', zh: '简单随机抽样（SRS）' },
        { code: '4.2', en: 'Stratified Random Samples', zh: '分层随机抽样' },
        { code: '4.3', en: 'Cluster and Systematic Samples', zh: '整群抽样与系统抽样' },
        { code: '4.4', en: 'Potential Problems with Sampling', zh: '抽样中的潜在偏差与问题' },
        { code: '4.5', en: 'Observational Studies and Experiments', zh: '观察性研究与控制实验' },
        { code: '4.6', en: 'Designing Experiments', zh: '实验设计基本原则（对照、随机、重复）' },
        { code: '4.7', en: 'Selecting an Experimental Design', zh: '完全随机、区组与配对实验设计' },
        { code: '4.8', en: 'Inference and Experiments', zh: '实验结果与统计显著性初步推断' },
        { code: '4.9', en: 'Scope of Inference', zh: '统计推断的适用范围（推广与因果）' }
      ]
    },
    {
      unit: 'unit-5',
      unitNum: 5,
      title: 'Unit 5 · Probability',
      sub: '随机现象、模拟与概率运算规则',
      lessons: [
        { code: '5.1', en: 'Introducing Probability', zh: '随机性与概率入门' },
        { code: '5.2', en: 'Simulation', zh: '用模拟实验估计概率' },
        { code: '5.3', en: 'Rules for Probability', zh: '概率基本法则' },
        { code: '5.4', en: 'The Addition Rule', zh: '概率加法公式与互斥事件' },
        { code: '5.5', en: 'Conditional Probability and Independence', zh: '条件概率与事件独立性' },
        { code: '5.6', en: 'Tree Diagrams', zh: '树状图与多阶段概率计算' }
      ]
    },
    {
      unit: 'unit-6',
      unitNum: 6,
      title: 'Unit 6 · Random Variables',
      sub: '离散/连续随机变量、二项分布与几何分布',
      lessons: [
        { code: '6.1', en: 'Discrete Random Variables', zh: '离散型随机变量及其期望、方差' },
        { code: '6.2', en: 'Continuous Random Variables', zh: '连续型随机变量与密度曲线' },
        { code: '6.3', en: 'Transforming Random Variables', zh: '随机变量的线性变换' },
        { code: '6.4', en: 'Combining Random Variables', zh: '随机变量的和与差运算' },
        { code: '6.5', en: 'Introduction to the Binomial Distribution', zh: '二项分布入门（BINS 条件）' },
        { code: '6.6', en: 'Parameters for Binomial Distributions', zh: '二项分布的均值与标准差' },
        { code: '6.7', en: 'Conditions for Inference', zh: '大样本正态近似条件' },
        { code: '6.8', en: 'The Geometric Distribution', zh: '几何分布' }
      ]
    },
    {
      unit: 'unit-7',
      unitNum: 7,
      title: 'Unit 7 · Sampling Distributions',
      sub: '抽样分布与中心极限定理',
      lessons: [
        { code: '7.1', en: 'Sampling Distributions', zh: '抽样分布的概念' },
        { code: '7.2', en: 'Bias and Variability', zh: '估计量的偏差与变异性' },
        { code: '7.3', en: 'Sample Proportions', zh: '样本比例的抽样分布' },
        { code: '7.4', en: 'Differences in Sample Proportions', zh: '两样本比例之差的抽样分布' },
        { code: '7.5', en: 'Sample Mean', zh: '样本均值的抽样分布' },
        { code: '7.6', en: 'The Central Limit Theorem', zh: '中心极限定理（CLT）' },
        { code: '7.7', en: 'Differences in Sample Means', zh: '两样本均值之差的抽样分布' }
      ]
    },
    {
      unit: 'unit-8',
      unitNum: 8,
      title: 'Unit 8 · Confidence Intervals for Proportions',
      sub: '总体比例的置信区间估计',
      lessons: [
        { code: '8.1', en: 'Interpreting a Confidence Interval', zh: '置信区间的解释' },
        { code: '8.2', en: 'Interpreting a Confidence Level', zh: '置信水平的含义' },
        { code: '8.3', en: 'Constructing a Confidence Interval for a Proportion', zh: '单样本比例置信区间的构造与条件' },
        { code: '8.4', en: 'Confidence Intervals for a Proportion', zh: '单样本比例置信区间应用与样本量计算' },
        { code: '8.5', en: 'Confidence Intervals for a Difference of Proportions', zh: '两总体比例之差的置信区间' }
      ]
    },
    {
      unit: 'unit-9',
      unitNum: 9,
      title: 'Unit 9 · Significance Tests for Proportions',
      sub: '总体比例的显著性检验与两类错误',
      lessons: [
        { code: '9.1', en: 'Introduction to Significance Tests', zh: '显著性检验与 p 值入门' },
        { code: '9.2', en: 'Significance and Type I Error', zh: '显著性水平 α 与第一类错误' },
        { code: '9.3', en: 'Significance Tests for a Proportion', zh: '单样本比例显著性检验' },
        { code: '9.4', en: 'Introduction to Significance Tests for a Difference of Proportions', zh: '两比例差检验的条件与假设设定' },
        { code: '9.5', en: 'Significance Tests for a Difference of Proportions', zh: '两样本比例之差显著性检验' },
        { code: '9.6', en: 'Type I and Type II Errors', zh: '第一类错误与第二类错误对比' },
        { code: '9.7', en: 'Power of a Test', zh: '检验功效（Power）及其影响因素' }
      ]
    },
    {
      unit: 'unit-10',
      unitNum: 10,
      title: 'Unit 10 · Confidence Intervals for Means',
      sub: '总体均值的 t 置信区间与配对估计',
      lessons: [
        { code: '10.1', en: 'Constructing a Confidence Interval for a Mean', zh: 't 分布与单样本均值置信区间构造' },
        { code: '10.2', en: 'Confidence Intervals for a Mean', zh: '单样本均值置信区间完整流程' },
        { code: '10.3', en: 'Confidence Intervals for a Difference of Means', zh: '两独立样本均值差置信区间' },
        { code: '10.4', en: 'Confidence Intervals for a Mean Difference', zh: '配对数据均值差的置信区间' }
      ]
    },
    {
      unit: 'unit-11',
      unitNum: 11,
      title: 'Unit 11 · Significance Tests for Means',
      sub: '总体均值的 t 检验与配对检验',
      lessons: [
        { code: '11.1', en: 'Introduction to Significance Tests for a Mean', zh: '单样本均值检验的条件与原理' },
        { code: '11.2', en: 'Significance Tests for a Mean', zh: '单样本均值显著性检验完整流程' },
        { code: '11.3', en: 'Introduction to Significance Tests for a Difference of Means', zh: '两独立样本均值差检验入门' },
        { code: '11.4', en: 'Significance Tests for a Difference of Means', zh: '两独立样本均值差显著性检验' },
        { code: '11.5', en: 'Significance Tests for a Mean Difference', zh: '配对数据均值差显著性检验' }
      ]
    },
    {
      unit: 'unit-12',
      unitNum: 12,
      title: 'Unit 12 · Chi-Square Tests',
      sub: '分类变量的卡方检验',
      lessons: [
        { code: '12.1', en: 'Introduction to Chi-Square Tests', zh: '卡方分布与期望频数入门' },
        { code: '12.2', en: 'Chi-Square Test for Goodness of Fit', zh: '卡方拟合优度检验' },
        { code: '12.3', en: 'Chi-Square Test for Homogeneity', zh: '卡方同质性检验' },
        { code: '12.4', en: 'Chi-Square Test for Independence', zh: '卡方独立性检验' }
      ]
    },
    {
      unit: 'unit-13',
      unitNum: 13,
      title: 'Unit 13 · Inference for Slope',
      sub: '线性回归斜率的置信区间与检验',
      lessons: [
        { code: '13.1', en: 'Sampling Distribution of Slope', zh: '回归斜率 b 的抽样分布与条件' },
        { code: '13.2', en: 'Confidence Intervals for Slope', zh: '回归斜率的置信区间' },
        { code: '13.3', en: 'Significance Tests for Slope', zh: '回归斜率的显著性检验' }
      ]
    }
  ]
};

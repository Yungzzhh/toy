import React, { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./index.less";
import {
  PhoneTwoTone,
  MailTwoTone,
  EnvironmentTwoTone,
  ToolTwoTone,
  AppstoreTwoTone,
  ContactsTwoTone,
  BookTwoTone,
  SnippetsTwoTone,
} from "@ant-design/icons";
import { Button } from "antd";

interface CvPreviewProp {
  name: string;
}
export default function CvPreview(prop: CvPreviewProp) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentRef: any = useRef();

  const infoList = [
    {
      iconName: <PhoneTwoTone />,
      msg: "18022989193",
    },
    {
      iconName: <MailTwoTone />,
      msg: "782494187@qq.com",
    },
  ];

  const skillList = [
    {
      skillName: "熟悉HTML、CSS，能够快速进行页面布局",
    },
    {
      skillName: "熟悉JavaScript、TypeScript",
    },
    {
      skillName: "熟悉Vue和其相关工作流，有Vue2、3、Nuxt的开发经验并了解原理",
    },
    {
      skillName: "熟悉React，有React和taro小程序的开发经验",
    },
    {
      skillName: "熟悉NodeJs，有express、eggjs框架的开发经验",
    },
    {
      skillName: "对解决浏览器兼容性问题、前端性能优化有一定经验",
    },
    {
      skillName: "了解webpack、vite工程化框架，负责过项目的搭建",
    },
  ];

  const experienceList = [
    {
      company: "上海亘岩网络科技有限公司(契约锁)",
      group: "前端业务支撑组",
      startTime: "2022/07",
      endTime: "2023/09",
      location: "上海",
      detail: [
        "负责新版官网的开发和维护和其内容管理平台的搭建和开发，并迁移旧版网站内容",
        "负责私有云开放平台的搭建和开发",
        "负责帮助中心的开发和重构",
        "负责私有云后台管理系统的自定义模块的维护和开发",
        "售前小程序的开发",
        "支援其他项目组",
      ],
    },
    {
      company: "稳健医疗用品股份有限公司",
      group: "集团数字化运营部",
      startTime: "2021/10",
      endTime: "2022/03",
      location: "深圳",
      detail: ["参与平台项目部署系统、开发系统、运维平台的开发"],
    },
  ];

  const projectList = [
    {
      name: "契约锁官网(www.qiyuesuo.com)",
      describe: "介绍契约锁的各项功能和公司的资历",
      tech: "nuxt2 + bootstrap + typescript",
      content: [
        "旧版官网的页面迁移",
        "官网内容板块、图片、各种协议的抽离，后续只需运营人员维护网站",
        "sentry、观测云监控系统的接入，并设置自定义埋点事件生成直方图分析",
        "自定义分享网页到微信展示的title、描述和图片",
        "页面适配ipad、ipadpro尺寸",
        "因安排演示模块被攻击而引入极验验证码",
      ],
      difficulty: [
        "首屏的FCP需要2-3s过慢",
        "需要多种渐变色渲染风格的按钮",
        "公司动态及行业方案加载卡顿",
      ],
      achievement: [
        "通过首屏优化方案，提高首屏加载速度，首屏FCP缩短到0.7s-1s，LCP缩短到2.5-3.5s",
        "二次封装图片组件，自动开启图片webp格式并支持在不兼容的情况下回退格式",
        "二次封装按钮组件，支持自定义渐变色和缓动动画",
        "通过用户滚动距离底部再加载公司动态解决渲染公司动态和行业方案加载卡顿的问题",
        "迁移旧版官网后不再需要进行原生开发，节省了300%的开发成本",
        "重构契约锁帮助中心作为子站，统一设计风格",
      ],
    },
    {
      name: "契约锁后台管理系统",
      describe:
        "对私有云的用户、印章、运维、权限和系统配置进行管理，并提供图表数据统计，助力企业更好、更方便管理和使用电子签章",
      tech: "react + typescript + antd",
      content: [
        "对自定义功能的Key、Value、功能说明和版本说明进行管理和配置",
        "系统配置私有云开放平台各类功能、接口开关",
        "支持对文件存储服务构建复杂多样的表单、拖拽、文件迁移状态判断、设置主存储等功能",
      ],
      difficulty: [
        "自定义功能模块的下拉组件需要支持分组输入搜索功能，且数据量较大",
        "文件存储服务的需要监听文件迁移状态、表单数据项复杂",
      ],
      achievement: [
        "封装自定义下拉组件，支持分组、搜索和选择，采用虚拟列表优化下拉选项列表加载速度",
        "封装文件存储的复杂表单组件，包含下拉选项、输入和上传，并通过轮询监听文件迁移状态",
      ],
    },
    {
      name: "私有云开放平台",
      describe:
        "面向私有云客户和项目同事，对开放的接口可阅读、可操作，为调试接口提供平台，并提供多种语言的请求示例",
      tech: "vue2 + webpack + typescript + elementUI",
      content: [
        "初始化项目包括路由、全局状态管理、api管理体系",
        "负责文档中心、在线调试、下载中心等模块的产品设计流程及开发",
        "封装目录-文档可拖拽组件",
      ],
      difficulty: [
        "在线调试用户输入板块为树级复杂表单，支持单选多选，且每层背景色不一样导致展开时页面渲染卡顿",
        "在线调试参数输入支持树状结构输入框输入或JSON、formdata格式数据输入两种方式，并记录用户输入参数，再次进入页面时自动填充参数",
        "支持多种语言的请求示例代码高亮",
      ],
      achievement: [
        "通过MutationObserver在展开节点时，通过节点层级特性对样式进行修改，解决树组件展开卡顿的问题，并通过mutationobserver-shim解决在ie10下MutationObserver失效的问题",
        "引入highlight.js解决多种语言请求实例代码高亮需求，采用ESModule导入，仅引入使用到的语言，大幅减少打包代码体积",
        "利用浏览器缓存对用户在线调试的请求参数和结果进行缓存和自动填充，支持JSON和formdata格式数据，并可定时过期，减少用户的二次输入时间",
        "项目已上线9个月，已有百家客户接入私有化部署使用",
      ],
    },
    {
      name: "官网内容管理系统",
      describe:
        "针对官网内容更改频率过高的模块进行资源抽离到后台管理，减少官网的维护成本",
      tech: "vue3 + eggjs + vite + typescript + elementPlus",
      content: [
        "初始化vite项目包括路由、全局状态管理、api管理体系",
        "负责封装全局注册组件功能，在特定的文件夹下自动全局注册组件",
        "负责图片管理、官网文章、视频管理等模块的产品设计流程及开发",
        "封装组件如SVG组件、ckEditor编辑器组件",
        "编写操作文档",
        "编写迁移图片脚本",
      ],
      difficulty: [
        "视频和大型docs文档上传速度过慢",
        "统一前后台文章样式，所见即所得且可预览",
        "项目需要内嵌在其他后台管理系统中且需要登录态",
      ],
      achievement: [
        "通过iframe将该项目内嵌在另一管理系统中，通过egg作为BFF连接redis获取token，省去了登录页面的直接开发-shim解决在ie10下MutationObserver失效的问题",
        "采用华为云的OSS云存储，进行分片上传，解决大文件上传等待时间过长问题",
        "利用cdn统一管理前后台的文章和编辑器的样式，达到所见即所得",
        "目前只需运营人员维护网站，节省100%的开发成本，且已稳定更新网站7个月",
      ],
    },
  ];

  const eduList = [
    {
      school: "佛山科学技术学院",
      major: "自动化",
      startTime: "2018/09",
      endTime: "2022/06",
    },
  ];

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "容志和-前端开发";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <Button>下载</Button>
        )}
        content={() => componentRef.current}
      />
      <div className="cv-outside">
        <div ref={componentRef} id="pdfViewId" className="cv-container">
          <div className="introduction">
            <h1 className="introduction-name">{prop.name}</h1>
            <div className="introduction-info">
              {infoList.length &&
                infoList.map((info) => (
                  <div className="info-detail" key={info.msg}>
                    <div className="info-detail__svg">{info.iconName}</div>
                    <div className="info-detail__msg">{info.msg}</div>
                  </div>
                ))}
            </div>
          </div>
          {skillList.length && (
            <div className="skill">
              <PartHeader name={"专业技能"} icon={<ToolTwoTone />} />
              {skillList.map((skill) => (
                <div key={skill.skillName} className="skill-detail">
                  {skill.skillName}
                </div>
              ))}
            </div>
          )}
          {experienceList.length && (
            <div className="exp">
              <PartHeader name={"工作经历"} icon={<ContactsTwoTone />} />
              {experienceList.map((experience) => (
                <div key={experience.company} className="experience">
                  <div className="experience-header">
                    <div>
                      {experience.company}{" "}
                      {experience.group && <>- {experience.group}</>}{" "}
                      {experience.location && (
                        <>
                          <EnvironmentTwoTone className="experience-header__location" />{" "}
                          {experience.location}
                        </>
                      )}
                    </div>
                    <div>
                      {experience.startTime} - {experience.endTime ?? "至今"}
                    </div>
                  </div>
                  {experience.detail.length > 1 ? (
                    experience.detail.map((detail) => (
                      <div className="experience-detail">{detail}</div>
                    ))
                  ) : (
                    <>
                      <div style={{ fontWeight: 500 }}>{experience.detail}</div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          {projectList.length && (
            <div className="project">
              <PartHeader name={"项目经历"} icon={<AppstoreTwoTone />} />
              {projectList.map((project) => (
                <div className="project-item" key={project.name}>
                  <div className="project-item__name">
                    <SnippetsTwoTone style={{ marginRight: "8px" }} />
                    {project.name}
                  </div>
                  <div className="project-item__desc">
                    项目描述：{project.describe}
                  </div>
                  <div className="project-item__desc project-item__segment">
                    技术选型：{project.tech}
                  </div>
                  <LoopProjectPart title="负责内容" content={project.content} />
                  <LoopProjectPart
                    title="项目难点"
                    content={project.difficulty}
                  />
                  <LoopProjectPart
                    title="项目成果"
                    content={project.achievement}
                  />
                </div>
              ))}
            </div>
          )}
          {eduList.length && (
            <div className="edu">
              <PartHeader name={"教育经历"} icon={<BookTwoTone />} />
              <div className="fw-600">
                {eduList.map((edu, i) => (
                  <div key={i} className='edu-detail'>
                    <div>
                      {edu.school} - {edu.major}
                    </div>
                    <div>
                      {edu.startTime} - {edu.endTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

interface PartHeaderProp {
  name: string;
  icon?: JSX.Element;
}
function PartHeader(prop: PartHeaderProp) {
  return (
    <div className="header weight">
      <span className="header-icon">{prop.icon}</span>
      <span className="header-name">{prop.name}</span>
    </div>
  );
}

interface LoopProjectPartProp {
  title: string;
  content: string[];
}
function LoopProjectPart(prop: LoopProjectPartProp) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <div className="part-title">{prop.title}:</div>
      <div>
        {prop.content.map((content: string, i: number) => (
          <div style={{ marginBottom: "4px" }} key={i}>
            {i + 1}、{content}
          </div>
        ))}
      </div>
    </div>
  );
}

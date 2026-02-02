import React, { useState } from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  const features = [
  { icon: '🧗', title: '轻量机身', description: '整机仅40kg，便于携带与部署，适用于多类作业场景' },
  { icon: '📦', title: '强力载荷', description: '可承载40kg负载，满足多类型工具或设备扩展需求' },
  { icon: '🎛️', title: '无级调速', description: '0–18m/min 行走速度可调，应对不同作业节奏要求' },
  { icon: '🌡️', title: '宽温适应', description: '支持 -10°C 至 50°C 环境，适用于多数工程现场' },
  { icon: '🧱', title: '越障能力强', description: '可越过约 6mm 焊缝等障碍，在复杂表面保持稳定附着' },
  { icon: '🕹️', title: '远程操控', description: '支持手柄遥控，实现精准操作与灵活控制' },
  { icon: '🛡️', title: 'IP65 防护', description: '抗水防尘，具备防坠落安全保护装置，适应高空作业' },
  { icon: '🤖', title: '智能换道', description: '具备竖直/水平自动换道能力，提升连续作业效率' }
];

  const specifications = [
  { label: '本体重量', value: '40kg' },
  { label: '负载能力', value: '40kg' },
  { label: '工作高度', value: '40m' },
  { label: '尺寸（L*W*H）', value: '500 × 450 × 250 mm' },
  { label: '工作温度', value: '-10°C ~ 50°C' },
  { label: '行走能力', value: '0–18 m/min（无级调速）' },
  { label: '电源形式', value: '220V / 16A' },
  { label: '越障能力', value: '高 6mm 焊缝' },
  { label: '防护等级', value: 'IP65' },
  { label: '防爆等级', value: 'Ex ib mb pzc IIC T4 Gc' }
];

  const [showImage, setShowImage] = useState(true);
  const [imageSrc, setImageSrc] = useState('/Tunnel.png');

  const handleImageError = () => {
    setShowImage(false);
  };


  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>新型爬壁机器人</h2>
        <p className="hero-description">
          新型爬壁机器人为小型多功能机器人，采用永磁吸附技术吸附于金属立面，通过两组驱动电机行走及差速转弯；底盘具有自适应结构，可在风电塔筒、管道、小容积储罐等小直径金属结构表面稳定吸附、行走及转弯。对工程背景的典型立柱开展结构分析，研制集成了基于永磁吸附式爬壁作业机器人及其用于原位修补的作业工具。
        </p>
        {/* <a
          href="https://www.bilibili.com/video/BV1h4SiB5Eqk/?spm_id_from=333.1387.homepage.video_card.click&vd_source=eb3a763f33da8c162da4e6c6c62bcceb"
          target="_blank"
          rel="noopener noreferrer"
          className="video-button"
        >
          ▶ 查看演示视频
        </a> */}
        {showImage && (
          <div className="hero-image">
            <div className="image-wrapper">
              <img
                src={imageSrc}
                alt="新型爬壁机器人"
                loading="lazy"
                onError={handleImageError}
              />
            </div>
            <p className="image-caption">新型爬壁机器人（示意图）</p>
          </div>
        )}
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

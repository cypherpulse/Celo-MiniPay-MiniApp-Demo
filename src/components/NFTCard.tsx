import React, { useRef, useState } from 'react';
import './NFTCard.css';

interface NFTCardProps {
  name: string;
  score: number;
  totalQuestions: number;
}

const NFTCard: React.FC<NFTCardProps> = ({
  name,
  score,
  totalQuestions
}) => {
  const percentage = (score / totalQuestions) * 100;
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'generating' | 'success' | 'error'>('idle');
  const [certificateId] = useState(() => `CELO-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);

  const generateCertificateImage = async (): Promise<string | null> => {
    if (!cardRef.current) return null;

    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      canvas.width = 1000;
      canvas.height = 1000;

      // Create CELO-themed gradient background
      const gradient = ctx.createRadialGradient(500, 500, 0, 500, 500, 500);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(0.3, '#16213e');
      gradient.addColorStop(0.6, '#0f3460');
      gradient.addColorStop(0.8, '#35D07F');
      gradient.addColorStop(1, '#f7fa50');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add hexagonal pattern
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const x = 100 + i * 100;
          const y = 100 + j * 100;
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (k * Math.PI) / 3;
            const px = x + 30 * Math.cos(angle);
            const py = y + 30 * Math.sin(angle);
            if (k === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
      
      ctx.globalAlpha = 1;

      // Main decorative border with glow
      ctx.strokeStyle = '#f7fa50';
      ctx.lineWidth = 12;
      ctx.shadowColor = '#f7fa50';
      ctx.shadowBlur = 20;
      ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
      
      ctx.lineWidth = 4;
      ctx.shadowBlur = 10;
      ctx.strokeRect(90, 90, canvas.width - 180, canvas.height - 180);
      
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // Set text properties
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';

      // Main Title
      ctx.font = 'bold 64px Arial';
      ctx.shadowColor = '#f7fa50';
      ctx.shadowBlur = 15;
      ctx.fillText('CeloIQ', canvas.width / 2, 200);
      
      ctx.font = 'bold 36px Arial';
      ctx.shadowBlur = 8;
      ctx.fillText('NFT CERTIFICATE', canvas.width / 2, 260);
      
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // Achievement badge
      ctx.font = '28px Arial';
      ctx.fillText('🏆 CELO MASTER 🏆', canvas.width / 2, 340);

      // Name
      ctx.font = 'bold 48px Arial';
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 10;
      ctx.fillText(name, canvas.width / 2, 420);
      
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // Achievement text
      ctx.font = '24px Arial';
      ctx.fillText('has mastered CELO blockchain knowledge', canvas.width / 2, 480);
      ctx.fillText('and demonstrated exceptional quiz expertise', canvas.width / 2, 520);

      // Score
      ctx.font = 'bold 72px Arial';
      ctx.shadowColor = '#35D07F';
      ctx.shadowBlur = 15;
      ctx.fillText(`${percentage.toFixed(0)}%`, canvas.width / 2, 620);
      
      ctx.font = 'bold 32px Arial';
      ctx.shadowBlur = 8;
      ctx.fillText('MASTERY ACHIEVED', canvas.width / 2, 670);
      
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      // Date
      ctx.font = '20px Arial';
      const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      ctx.fillText(`Certified on ${today}`, canvas.width / 2, 750);

      // Certificate ID
      ctx.font = '16px Arial';
      ctx.fillText(`Certificate ID: ${certificateId}`, canvas.width / 2, 800);
      
      // Footer
      ctx.font = 'bold 24px Arial';
      ctx.fillText('CeloIQ - CELO Network', canvas.width / 2, 880);
      
      // Decorative emojis
      ctx.font = '40px Arial';
      ctx.fillText('⚡', 200, 200);
      ctx.fillText('🚀', canvas.width - 200, 200);
      ctx.fillText('💎', 200, canvas.width - 200);
      ctx.fillText('🎯', canvas.width - 200, canvas.width - 200);

      return canvas.toDataURL('image/png');
    } catch (error) {
      console.error('Error generating certificate:', error);
      return null;
    }
  };

  const downloadAsImage = async () => {
    setDownloadStatus('generating');
    
    try {
      const dataURL = await generateCertificateImage();
      if (!dataURL) {
        setDownloadStatus('error');
        return;
      }

      // Try Web Share API first (mobile)
      if (navigator.share) {
        try {
          const response = await fetch(dataURL);
          const blob = await response.blob();
          const file = new File([blob], `CeloIQ_Certificate_${name.replace(/\s+/g, '_')}.png`, { 
            type: 'image/png' 
          });
          
          await navigator.share({
            title: 'My CeloIQ Certificate',
            text: `I scored ${percentage.toFixed(0)}% on CeloIQ! 🏆`,
            files: [file]
          });
          
          setDownloadStatus('success');
          return;
        } catch {
          console.log('Share failed, trying download');
        }
      }

      // Fallback: Traditional download
      const response = await fetch(dataURL);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `CeloIQ-Certificate-${name.replace(/\s+/g, '_')}-${percentage.toFixed(0)}%.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setDownloadStatus('success');
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
    }
    
    setTimeout(() => setDownloadStatus('idle'), 3000);
  };

  const shareText = async () => {
    try {
      const shareData = {
        title: 'CeloIQ Certificate',
        text: `🏆 I just scored ${percentage.toFixed(0)}% on CeloIQ! Test your CELO knowledge: `,
        url: window.location.origin
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        const text = `${shareData.text}${shareData.url}`;
        await navigator.clipboard.writeText(text);
        alert('✅ Share text copied to clipboard!');
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <div className="nft-container">
      {/* Downloadable Card */}
      <div
        ref={cardRef}
        className="nft-card"
      >
        {/* NFT-style Background Pattern */}
        <div className="nft-bg-pattern">
          <div className="circle-pattern circle-1"></div>
          <div className="circle-pattern circle-2"></div>
          <div className="circle-pattern circle-3"></div>
          <div className="circle-pattern circle-4"></div>
          
          <div className="geometric-pattern geo-1"></div>
          <div className="geometric-pattern geo-2"></div>
          <div className="geometric-pattern geo-3"></div>
          <div className="geometric-pattern geo-4"></div>
        </div>

        <div className="nft-content-wrapper">
          {/* Header */}
          <div className="nft-header">
            <div className="nft-icon-badge crown-badge">
              👑
            </div>
            <h2 className="nft-brand-title">
              CeloIQ
            </h2>
            <div className="nft-icon-badge gem-badge">
              💎
            </div>
          </div>

          {/* Certificate Title */}
          <div className="nft-cert-title">
            <div className="sparkle-container">
              <span className="sparkle">✨</span>
              <div className="award-badge">
                🏆
              </div>
              <span className="sparkle">✨</span>
            </div>
            <h3 className="cert-type">NFT CERTIFICATE</h3>
            <p className="cert-subtitle">🌟 CELO MASTER 🌟</p>
          </div>

          {/* Name */}
          <div className="nft-name-section">
            <h1 className="nft-holder-name">{name}</h1>
            <div className="name-divider"></div>
          </div>

          {/* Achievement */}
          <div className="nft-achievement">
            <p className="achievement-text">has mastered CELO blockchain knowledge with</p>
            <div className="score-display">
              <div className="score-number">{percentage.toFixed(0)}%</div>
              <div className="score-shadow">{percentage.toFixed(0)}%</div>
            </div>
            <p className="achievement-badge">MASTERY ACHIEVED</p>
          </div>

          {/* Date */}
          <div className="nft-date-section">
            <p className="date-text">{new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p className="cert-id">Certificate ID: {certificateId}</p>
          </div>

          {/* Congratulatory Message */}
          <div className="congrats-box">
            <p className="congrats-text">🎉 Outstanding Achievement! 🎉</p>
            <p className="congrats-subtext">⚡ CELO Expert Certified 💎</p>
          </div>
        </div>
      </div>

      {/* Download & Share Buttons */}
      <div className="nft-actions">
        <button
          onClick={downloadAsImage}
          disabled={downloadStatus === 'generating'}
          className={`nft-action-btn primary ${
            downloadStatus === 'generating' ? 'loading' :
            downloadStatus === 'success' ? 'success' :
            downloadStatus === 'error' ? 'error' : ''
          }`}
        >
          {downloadStatus === 'generating' ? (
            <>
              <div className="spinner"></div>
              <span>Generating...</span>
            </>
          ) : downloadStatus === 'success' ? (
            <>
              <span className="btn-icon">🏆</span>
              <span>Saved!</span>
            </>
          ) : downloadStatus === 'error' ? (
            <>
              <span className="btn-icon">💾</span>
              <span>Try Again</span>
            </>
          ) : (
            <>
              <span className="btn-icon">💾</span>
              <span>Save Certificate</span>
            </>
          )}
        </button>
        
        <button
          onClick={shareText}
          className="nft-action-btn secondary"
        >
          <span className="btn-icon">📤</span>
          <span>Share Achievement</span>
        </button>
      </div>
      
      {/* Help Text */}
      <div className="help-text">
        <p>📱 On mobile? Try long-pressing the certificate above to save it!</p>
      </div>
    </div>
  );
};

export default NFTCard;

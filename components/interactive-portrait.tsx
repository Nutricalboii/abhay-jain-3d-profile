'use client';

import Image from 'next/image';
import { useRef } from 'react';

const orbitLabels = [
  { label: 'PRODUCT', className: 'orbit-label orbit-label-one' },
  { label: 'SYSTEMS', className: 'orbit-label orbit-label-two' },
  { label: 'MARKETS', className: 'orbit-label orbit-label-three' },
  { label: 'EXECUTION', className: 'orbit-label orbit-label-four' },
];

export default function InteractivePortrait() {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty('--tilt-x', `${y * -7}deg`);
    stage.style.setProperty('--tilt-y', `${x * 9}deg`);
    stage.style.setProperty('--cursor-x', `${50 + x * 16}%`);
    stage.style.setProperty('--cursor-y', `${50 + y * 16}%`);
  }

  function handlePointerLeave() {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty('--tilt-x', '0deg');
    stage.style.setProperty('--tilt-y', '0deg');
    stage.style.setProperty('--cursor-x', '50%');
    stage.style.setProperty('--cursor-y', '50%');
  }

  return (
    <div
      className="portrait-stage"
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="portrait-orbit portrait-orbit-outer" aria-hidden="true" />
      <div className="portrait-orbit portrait-orbit-inner" aria-hidden="true" />
      <div className="portrait-grid" aria-hidden="true" />
      <div className="portrait-halo" aria-hidden="true" />

      {orbitLabels.map((item) => (
        <span className={item.className} key={item.label}>
          {item.label}
        </span>
      ))}

      <div className="portrait-depth portrait-depth-back" aria-hidden="true" />
      <div className="portrait-depth portrait-depth-mid" aria-hidden="true" />
      <Image
        src="/abhay-3d-portrait.png"
        alt="Abhay Jain, business and strategy leader"
        width={1254}
        height={1254}
        priority
        className="portrait-subject"
      />
      <div className="portrait-caption" aria-hidden="true">
        <span>IDENTITY / 01</span>
        <span>INTERACTIVE PROFILE</span>
      </div>
    </div>
  );
}

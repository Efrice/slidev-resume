---
aspectRatio: 1/1.414
title: Efrice Resume
---

<div class="hack text-left">

<div class="text-center">
  <h1 class="font-bold text-4xl">Efrice</h1>
  <div class="mt-2">
    <div class="inline-flex items-center">
      <span class="pr-1"><carbon-phone/></span>
      <span>12345678910</span>
    </div>
    <span class="mx-2">·</span>
    <div class="inline-flex items-center">
      <span class="pr-1"><carbon-email /></span>
      <span>efrice_web@126.com</span>
    </div>
    <span class="mx-2">·</span>
    <div class="inline-flex items-center">
      <span class="pr-1"><tabler-brand-github /></span>
      <a href="https://github.com/efrice" target="_blank">efrice</a>
    </div>
  </div>
</div>

<div class="mt-6 info">
  <h2 class="text-l mb-2 font-bold">Infomation</h2>
  <ul>
    <li><span class="pr-1"><carbon-home /></span>address: undefined</li>
  </ul>
</div>

<WorkExperience :experiences="[
{time:['2018.02','Now'], company: 'xxx company', role: 'Front-end'}]"
/>

<h2 class="text-l mt-5 mb-2 font-bold">SKills</h2>
<List listStyleType="none" :list="[
  `- Experience with HTML, CSS and JS/TS.`,
  `- Experience in Vue UI framework.`,
  `- Experience writing unit tests and testable code.`]" />

<h2 class="text-l mt-5 mb-2 font-bold">Projects</h2>

<div class="mt-5">
  <div class="font-bold text-2xl mb-2">
      <span class="pr-2"><tabler-brand-github /></span>
      <a href="https://github.com/Efrice/watermark" target="_blank">watermark</a>
  </div>
  <ItemKeyValue itemValue="Add watermark to image/pdf, or compression."/>
  <div class="mb-1">
    <span class="text-l mt-5 mb-2 font-bold">Features: </span>
    <List :list="[
    `No sever, so safe.`,
    `Save the config for next use or not.`,
    `Add any number of watermarks you like by row and col.`,
    `Set the watermark anywhere you want by startX, startY and offsetX, offsetY.`,
    `Change image width and height, also can compress if you need.`]" />
  </div>
</div>

<div class="mt-5">
  <div class="font-bold text-2xl mb-2">
      <span class="pr-2"><tabler-brand-github /></span>
      <a href="https://github.com/Efrice/vscode-quick-console" target="_blank">vscode-quick-console</a>
  </div>
  <ItemKeyValue itemValue="Add watermark to image/pdf, or compression."/>
  <div class="mb-1">
    <span class="text-l mt-5 mb-2 font-bold">Features: </span>
    <List :list="[
    `It's can be use anywhere.`,
    `Single variable without selection.`,
    `Multiple params of function with selection.`,
    `Multiple continuous variables like deconstruct assignment with selection.`,
    `Clear console.logs in the active file.`]" />
  </div>
</div>

<div class="mt-6">
  <h2 class="text-2xl mb-2 font-bold">About</h2>
  <List listStyleType="none" :list="[
    `- I am an open-source enthusiast and maintainer.`,
    `- I love how collaboration and knowledge sharing happens through open-source.`,
    `- I am very happy to see what I do could eventually feedback to the community and industry.`]" />
</div>

</div>

import React from "react"
import {
  SiGatsby,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiCss3,
  SiTypescript,
  SiVueDotJs,
  SiNetlify,
  SiStyledComponents,
  SiGithub,
  SiGraphql,
  SiNextDotJs,
  SiJquery,
  SiRedux,
  SiNodeDotJs,
  SiAngular,
  SiSass,
  SiJest
} from "react-icons/si"

const Tech = () => (
  <section class="container px-4 pb-24 mx-auto">
    <h2 class="mb-16 text-4xl font-extrabold leading-tight text-indigo-500">
      Tools I've Used
    </h2>
    <div class="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
      <div class="flex items-center justify-center">
        <SiReact size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiGatsby size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiJavascript size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiHtml5 size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiCss3 size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiTypescript size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiVueDotJs size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiNetlify size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiStyledComponents size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiGithub size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiGraphql size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiNextDotJs size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiJquery size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiRedux size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiNodeDotJs size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiAngular size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiSass size="4em" />
      </div>
      <div class="flex items-center justify-center">
        <SiJest size="4em" />
      </div>
    </div>
  </section>
)

export default Tech

import React from "react"
import apollo from "../images/apollo-graphql-badge.svg"

const Certs = () => (
  <section class="container px-4 pb-24 mx-auto">
    <h2 class="mb-8 text-4xl font-extrabold leading-tight text-indigo-500">
      Certifications
    </h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      <div class="flex flex-col items-start">
        <a href="https://odyssey.apollographql.com/certifications/d6544145-b6e5-4993-b166-9cd4edc1aa90">
        <img
          src={apollo}
          alt="Apollo Graphql Certification Badge"
          width={125}
          height={125}
        />
        </a>
      </div>
    </div>
  </section>
)

export default Certs

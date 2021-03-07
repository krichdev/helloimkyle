// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <section className="container px-4 py-24 mx-auto">
      <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">
        All Articles
      </h2>
      <div className="w-full xl:w-4/6">
        <div className="flex flex-col space-y-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://kutty.netlify.app/brand/og.png"
              className="object-cover w-full h-40 col-span-1 bg-center"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a className="text-gray-900 hover:text-purple-700">
                  Process Documents Using Artificial Intelligence For RPA Bots
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Earlier RPA bots used to have some limitations like it would
                take structured data for processing from excel, database, on
                these data. But with advancements in technology like OCR
                (Optical Character Recognition) and Machine Learning, RPA bots
                are capable of extracting these data …
              </p>
              <a className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://kutty.netlify.app/brand/og.png"
              className="object-cover w-full h-40 col-span-1 bg-center"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a className="text-gray-900 hover:text-purple-700">
                  Implement Dark Mode in Your Android App
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Are you curious to implement the Dark Mode in Android
                Application? Here’s the perfect guideline to attain the Dark
                Mode in Android Application. Don’t waste your time; just
                implement and enjoy Dark Mode.
              </p>
              <a className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://kutty.netlify.app/brand/og.png"
              className="object-cover w-full h-40 col-span-1 bg-center"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a className="text-gray-900 hover:text-purple-700">
                  Why is Mental Health one of the Important Issues to Address?
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Mental health was one of the under spoken topics before this
                lockdown. After sitting at home for about six months I realized
                that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
              <a className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://kutty.netlify.app/brand/og.png"
              className="object-cover w-full h-40 col-span-1 bg-center"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a className="text-gray-900 hover:text-purple-700">
                  Pattern Matching In Elixir
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Pattern matching is a great way to write idiomatic functional
                code. It’s a powerful tenant of functional programming that
                makes it a joy to write conditional statements. If you don’t
                want your code to be peppered with deeply nested statements or
                multiple variations of similar business logic, use pattern
                matching!
              </p>
              <a className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://kutty.netlify.app/brand/og.png"
              className="object-cover w-full h-40 col-span-1 bg-center"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a className="text-gray-900 hover:text-purple-700">
                  3 things you should change during your focus group interview
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                We changed three things about our feedback sessions, and it
                changed everything about running customer feedback sessions.
              </p>
              <a className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://kutty.netlify.app/brand/og.png"
              className="object-cover w-full h-40 col-span-1 bg-center"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a className="text-gray-900 hover:text-purple-700">
                  Using Webpack with React Typescript
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Ever wondered if there is a way to just tie up all your code
                into one single module for easy usage. If so, in this article I
                will show you how to bundle all your code into a single
                javascript module that you can easily use in any other project.
              </p>
              <a className="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
        </div>
        <div className="pt-10 mt-10 border-t border-gray-200">
          <a className="w-full btn btn-light btn-lg md:w-auto">Load More</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default Blog

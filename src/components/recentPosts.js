import React from "react"
import { Link } from "gatsby"

const RecentPosts = () => (
  <section class="container px-4 pb-24 mx-auto">
    <h2 class="mb-10 text-4xl font-extrabold leading-tight text-indigo-500">
      Recent Posts
    </h2>
    <div class="flex flex-col space-y-12 divide-y divide-gray-200">
      <div>
        <p class="pt-12 mb-3 text-sm font-normal text-gray-500">
          April 16, 2020
        </p>
        <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
          <a href="#" class="text-gray-900 hover:text-purple-700">
            Process Documents Using Artificial Intelligence For RPA Bots
          </a>
        </h2>
        <p class="mb-4 text-base font-normal text-gray-600">
          Earlier RPA bots used to have some limitations like it would take
          structured data for processing from excel, database, on these data.
          But with advancements in technology like OCR (Optical Character
          Recognition) and Machine Learning, RPA bots are capable of extracting
          these data …
        </p>
        <a href="#" class="btn btn-light btn-sm">
          Keep Reading
        </a>
      </div>
      <div>
        <p class="pt-12 mb-3 text-sm font-normal text-gray-500">
          April 16, 2020
        </p>
        <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
          <a href="#" class="text-gray-900 hover:text-purple-700">
            Implement Dark Mode in Your Android App
          </a>
        </h2>
        <p class="mb-4 text-base font-normal text-gray-600">
          Are you curious to implement the Dark Mode in Android Application?
          Here’s the perfect guideline to attain the Dark Mode in Android
          Application. Don’t waste your time; just implement and enjoy Dark
          Mode.
        </p>
        <a href="#" class="btn btn-light btn-sm">
          Keep Reading
        </a>
      </div>
      <div>
        <p class="pt-12 mb-3 text-sm font-normal text-gray-500">
          April 16, 2020
        </p>
        <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
          <a href="#" class="text-gray-900 hover:text-purple-700">
            Why is Mental Health one of the Important Issues to Address?
          </a>
        </h2>
        <p class="mb-4 text-base font-normal text-gray-600">
          Mental health was one of the under spoken topics before this lockdown.
          After sitting at home for about six months I realized that this is one
          of the important issues to address not only in the work sector but
          also in daily living.
        </p>
        <a href="#" class="btn btn-light btn-sm">
          Keep Reading
        </a>
      </div>
      <Link
        to="/blog"
        className="text-white w-full md:w-1/4 text-center mx-auto font-semibold px-6 py-3 text-base border rounded border-transparent leading-snug bg-indigo-500"
      >
        All Posts
      </Link>
    </div>
  </section>
)

export default RecentPosts

import React from 'react'

function Card({person}) {
  return (
      <div>
          {person?.map((item, index) => (
          <figure key={index} className="bg-slate-10 rounded-xl p-4 dark:bg-slate-800 mb-4">
              <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
              <div className="pt-6 text-center space-y-4">
                  <blockquote>
                      <p className="text-lg font-medium">
                          “Tailwind CSS is the only framework that I've seen scale
                          on large teams. Its easy to customize, adapts to any design,
                          and the build size is tiny.”
                      </p>
                  </blockquote>
                  <figcaption  className="font-medium">
                      <div className="text-sky-500 dark:text-sky-400">
                          {item?.name || "No Nome"}
                      </div>
                      <div className="text-slate-700 dark:text-slate-500">
                          {item?.role|| "No Role assigned"}
                      </div>
                  </figcaption>
              </div>
          </figure>
          ))}
      </div>
  )
}

export default Card

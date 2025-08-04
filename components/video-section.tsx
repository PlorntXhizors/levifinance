"use client"

export default function VideoSection() {
  return (
    <section className="relative pt-24 pb-8 bg-gray-900 overflow-hidden">
      <div className="container">
        <div className="relative overflow-hidden">
          {/* YouTube Video Embed */}
          <div className="relative aspect-video">
            <iframe
              id="youtube-video"
              src="https://www.youtube.com/embed/TTb0dNTWpP8?si=aWAs85zZ2M8NH1od&autoplay=1&mute=1&loop=1&playlist=TTb0dNTWpP8&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0"
              title="בית לוי שמאות ופיננסים - סרטון הצגה"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

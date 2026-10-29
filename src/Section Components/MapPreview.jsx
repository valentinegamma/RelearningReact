import { ArrowUpRight, MapPin } from "lucide-react"

const location = "Elite House, Kikuyu, Kiambu, Kenya"
const encodedLocation = encodeURIComponent(location)

function MapPreview() {
  return (
    <section className="map-preview" aria-labelledby="map-preview-title">
      <div className="map-preview__inner">
        <header className="map-preview__header">
          <div>
            <h2 className="map-preview__title" id="map-preview-title">
              Visit us in <span>Kikuyu.</span>
            </h2>
          </div>
          <a
            className="map-preview__directions"
            href={`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`}
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </header>

        <p className="map-preview__address">
          <MapPin size={18} aria-hidden="true" />
          <span>{location}</span>
        </p>

        <div className="map-preview__frame">
          <iframe
            title={`Map showing ${location}`}
            src={`https://www.google.com/maps?q=${encodedLocation}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default MapPreview

import "./Maps.styles.css";

function Maps() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q= rua José Paiva Cavalcante&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
export default Maps;

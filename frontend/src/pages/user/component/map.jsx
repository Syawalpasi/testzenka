import React from 'react';

// Komponen React untuk merender iframe Google Maps
function GoogleMapsIframe() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3982.047522174173!2d98.6188064!3d3.5765508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fe0214161af%3A0x55599619623767ff!2sBrewsuniq%20Store%20Ringroad!5e0!3m2!1sid!2sid!4v1711349054669!5m2!1sid!2sid"
            width="100%"
            height="400px"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            
        ></iframe>
    );
}

// Contoh penggunaan komponen
function Map() {
    return (
        <div className="Map">
            <GoogleMapsIframe />
        </div>
    );
}

export default Map;

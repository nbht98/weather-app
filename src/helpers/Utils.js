import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCloud, faCloudRain, faSmog, faSnowman, faSun } from '@fortawesome/free-solid-svg-icons';

const helpers = {
    getWeatherIcon: (icon) => {
        const icons = {
            "Haze": <FontAwesomeIcon icon={faSmog} size="lg" color="white"/>,
            "Thunderstorm": <FontAwesomeIcon icon={faBolt} size="lg" color="white"/>,
            "Drizzle": <FontAwesomeIcon icon={faCloudRain} size="lg" color="white"/>,
            "Rain": <FontAwesomeIcon icon={faCloudRain} size="lg" color="white"/>,
            "Snow": <FontAwesomeIcon icon={faSnowman} size="lg" color="white"/>,
            "Mist": <FontAwesomeIcon icon={faSmog} size="lg" color="white"/>,
            "Clear": <FontAwesomeIcon icon={faSun} size="lg" color="white"/>,
            "Clouds": <FontAwesomeIcon icon={faCloud} size="lg" color="white"/>,
        }
        return icons[icon]    
    }
}



export default helpers
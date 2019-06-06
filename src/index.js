import print from './print'
import './style.css';
{
    ev.oncopy  = function(e){
        console.log(e.clipboardData.getData('text/plain'))
    }
}


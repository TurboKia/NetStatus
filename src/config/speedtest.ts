
import { IEnv } from '../interfaces/env';
import IOC from '../ioc';


const DEFAULTS_TESTINTERVAL = 300;
const DEFAULTS_SERVERCONFIGURATIONS = [{"name":"Los Angeles, United States (Clouvider)","server":"//la.speedtest.clouvider.net/backend","id":54,"dlURL":"garbage.php","ulURL":"empty.php","pingURL":"empty.php","getIpURL":"getIP.php","sponsorName":"Clouvider","sponsorURL":"https://www.clouvider.co.uk/"}]

const exports = (env: IEnv = IOC().env()) => {
    return {
        testInterval : env.getInt('REACT_APP_TESTINTERVAL', DEFAULTS_TESTINTERVAL),
        serverConfigurations: env.getArray<any>('REACT_APP_SERVERCONFIGURATONS', DEFAULTS_SERVERCONFIGURATIONS),
    }
};

export default exports

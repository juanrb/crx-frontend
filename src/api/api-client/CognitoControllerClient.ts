import * as Types from '../api-client';
import { throwException } from '../api-client';
import { getFetch, getBaseUrl, getJsonParseReviver } from './helpers';

/**
 * @return The User records
 */
export function create(body: Types.User): Promise<Types.UserResponse> {
    let url_ = getBaseUrl() + "/api/user";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: RequestInit = {
        body: content_,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processCreate(_response);
    });
}

function processCreate(response: Response): Promise<Types.UserResponse> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, getJsonParseReviver());
        result200 = Types.UserResponse.fromJS(resultData200);
        return result200;
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<Types.UserResponse>(null as any);
}
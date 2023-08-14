import * as Types from '../api-client';
import { throwException } from '../api-client';
import { getFetch, getBaseUrl, getJsonParseReviver } from './helpers';

export function resultByBotId(botId: string): Promise<void> {
    let url_ = getBaseUrl() + "/api/user/real-estate/results/{botId}";
    if (botId === undefined || botId === null)
      throw new Error("The parameter 'botId' must be defined.");
    url_ = url_.replace("{botId}", encodeURIComponent("" + botId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processResultByBotId(_response);
    });
}

function processResultByBotId(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        return;
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}

export function update(id: number, botId: number): Promise<void> {
    let url_ = getBaseUrl() + "/api/user/real-estate/results/{botId}/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    if (botId === undefined || botId === null)
      throw new Error("The parameter 'botId' must be defined.");
    url_ = url_.replace("{botId}", encodeURIComponent("" + botId));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "PUT",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processUpdate(_response);
    });
}

function processUpdate(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 200) {
        return response.text().then((_responseText) => {
        return;
        });
    } else if (status !== 200 && status !== 204) {
        return response.text().then((_responseText) => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        });
    }
    return Promise.resolve<void>(null as any);
}
import * as Types from '../api-client';
import { throwException } from '../api-client';
import { getFetch, getBaseUrl, getJsonParseReviver } from './helpers';

export function bot(): Promise<void> {
    let url_ = getBaseUrl() + "/api/user/real-estate/bot";
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processBot(_response);
    });
}

function processBot(response: Response): Promise<void> {
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

export function create(): Promise<void> {
    let url_ = getBaseUrl() + "/api/user/real-estate/bot";
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "POST",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processCreate(_response);
    });
}

function processCreate(response: Response): Promise<void> {
    const status = response.status;
    let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
    if (status === 201) {
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

export function botById(id: string): Promise<void> {
    let url_ = getBaseUrl() + "/api/user/real-estate/bot/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "GET",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processBotById(_response);
    });
}

function processBotById(response: Response): Promise<void> {
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

export function delete_(id: string): Promise<void> {
    let url_ = getBaseUrl() + "/api/user/real-estate/bot/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    let options_: RequestInit = {
        method: "DELETE",
        headers: {
        }
    };

    return getFetch().fetch(url_, options_).then((_response: Response) => {
        return processDelete(_response);
    });
}

function processDelete(response: Response): Promise<void> {
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
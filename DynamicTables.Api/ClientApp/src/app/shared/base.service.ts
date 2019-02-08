import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceBase {

    public _client: HttpClient;
    public _baseUrl: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._client = http;
        this._baseUrl = baseUrl;
    }
}

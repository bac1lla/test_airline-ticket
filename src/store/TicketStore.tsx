import {makeAutoObservable} from "mobx";
import {IAvailableTime} from "../types/types";

export default class TicketStore {
    private _returnDate: string;
    private _location: string;
    private _destination: string;
    private _departDate: string;
    private _roundTrip: boolean;
    private _time: IAvailableTime;
    private _availableTime: IAvailableTime[];

    constructor() {
        this._location = ""
        this._destination = ""
        this._departDate = ""
        this._returnDate = ""
        this._roundTrip = false
        this._time = {startTime: "09:20", finishTime: "11:05"}
        this._availableTime = [
            {startTime: "09:20", finishTime: "11:05"},
            {startTime: "10:20", finishTime: "12:05"},
            {startTime: "11:20", finishTime: "13:05"},
        ]
        makeAutoObservable(this)
    }

    setLocation(location: string) {
        this._location = location
    }

    setDestination(destination: string) {
        this._destination = destination
    }

    setDepartDate(departDate: string) {
        this._departDate = departDate
    }

    setReturnDate(returnDate: string) {
        this._returnDate = returnDate
    }

    setRoundTrip(roundTrip: boolean) {
        this._roundTrip = roundTrip
    }

    setTime(time: IAvailableTime) {
        this._time = time
    }

    setAvailableTime(availableTime: IAvailableTime[]) {
        this._availableTime = availableTime
    }

    get location() {
        return this._location
    }

    get destination() {
        return this._destination
    }

    get departDate() {
        return this._departDate
    }

    get returnDate() {
        return this._returnDate
    }

    get roundTrip() {
        return this._roundTrip
    }

    get time() {
        return this._time
    }

    get availableTime() {
        return this._availableTime
    }
}
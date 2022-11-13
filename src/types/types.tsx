export interface ITicket {
    location: string
    destination: string
    departDate: string,
    returnDate?: string
}

export interface ITicketSingle {
    location: string
    destination: string
    date: string
    roundTrip: boolean
}

export interface IAvailableTime {
    startTime: string
    finishTime: string
}

export interface IFormTicket extends ITicket {
    roundTrip: boolean
}

export interface ITicketStore {

}
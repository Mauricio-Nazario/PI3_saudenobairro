import {Booking} from "../../models/booking/Booking";
import httpClientUtil from "../../util/HttpClientUtil";

export default class FindBookingAction {
    public static async findBookings(
        params: {
            onError?: (error: any) => void;
        }
    ): Promise<Booking[]> {
        let result: Booking[] = [];
        try {
            const url = "/health/find";
            const response = await httpClientUtil.request<Booking[]>(url, 'GET');
            return response.data;
        } catch (error_1) {
            httpClientUtil.handleErrorResponse(error_1);
            if (params.onError) params.onError(error_1);
            return result;
        }
    }

    public static async findBookingsHistory(
        params: {
            onError?: (error: any) => void;
        }
    ): Promise<Booking[]> {
        let result: Booking[] = [];
        try {
            const url = "/health/find-history";
            const response = await httpClientUtil.request<Booking[]>(url, 'GET');
            return response.data;
        } catch (error_1) {
            httpClientUtil.handleErrorResponse(error_1);
            if (params.onError) params.onError(error_1);
            return result;
        }
    }
}

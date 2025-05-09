import httpClientUtil from "../../util/HttpClientUtil";
import {Booking} from "../../models/booking/Booking";

class CreateBookingAction {

    public static async create(command: Booking): Promise<void> {
        try {
            const url = "/health/create";

            await httpClientUtil.request(
                url,
                "POST",
                command
            );

        } catch (error_1) {
            httpClientUtil.handleErrorResponse(error_1);
        }
    }
}

export default CreateBookingAction;
import { format } from "date-fns";
import { id } from "date-fns/locale";
import _ from "lodash";

function dateFormat(tgl: any, frmt: any = "dd MMMM yyyy") {
  return format(new Date(tgl), frmt, {
    locale: id,
  });
}

export { dateFormat };

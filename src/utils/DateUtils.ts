
/**
 * Transforma el Datetime y el Timezone en un objeto Date.
 * @param dt DateTime
 * @param timezone Time Zone
 * @returns Date
 */
export const parseDateTime = (dt:number,timezone:number) => {
  let date = new Date(dt*1000+(timezone*1000))
  return date;
};
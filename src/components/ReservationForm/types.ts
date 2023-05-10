import { Dayjs } from "dayjs";

export interface ISendData {
    tower: Tower,
    floor: Floor,
    room: Room,
    date: Dayjs,
    time: string,
    comments: string
}

type Tower =  'A' | 'B';
type Floor = Range<3, 27>;
type Room = Range<1, 10>

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>
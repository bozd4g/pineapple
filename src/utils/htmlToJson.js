import {
    parse
} from 'himalaya';

export default function htmlToJson(html) {
    return parse(html);
}
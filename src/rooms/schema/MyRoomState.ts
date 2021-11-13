import { Schema, Context, type } from "@colyseus/schema";
import {Position, Velocity} from "../../../simple/src/main";

export class MyRoomState extends Schema {

  @type("string") mySynchronizedProperty: string = "Hello world";

  @type(Position) position: Position;

  @type(Velocity) velocity: Velocity;

}

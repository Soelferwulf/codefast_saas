import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { auth } from "@/auth";

const getBoard = async (boardId) => {
  const session = await auth();

  await connectMongo();

  const board = await Board.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });

  if (!board) {
    redirect("/dashboard");
  }

  return board;
};

export default async function FeedbackBoard({ params }) {
  const { boardId } = params;

  // Get board with ObjectID 'boardId'

  const board = await getBoard(boardId);

  return <main>{board.name}</main>;
}

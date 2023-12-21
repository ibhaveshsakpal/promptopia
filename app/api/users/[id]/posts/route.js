import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const getPrompts = await Prompt.find({
        creator: params.id
    }).populate("creator");

    if (getPrompts) {
      return new Response(JSON.stringify(getPrompts), { status: 201 });
    }
  } catch (error) {
    return new Response("Failed to fetch prompts ", { status: 500 });
  }
};

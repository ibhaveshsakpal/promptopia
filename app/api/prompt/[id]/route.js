import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const getPrompts = await Prompt.findById(params.id).populate("creator");

    if (!getPrompts) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(getPrompts), { status: 201 });
  } catch (error) {
    return new Response("Failed to fetch prompts ", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt ", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);

    return new Response("Successfully deleted prompt", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt ", { status: 500 });
  }
};

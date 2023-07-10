#!/usr/bin/env node
import { Command } from "commander";
import ora from "ora";

import figlet from "figlet";
import simpleGit, { SimpleGit } from "simple-git";
import gradient from "gradient-string";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("appwrite-manager")
    .description("Appwrite Manager CLI")
    .version("1.0.0", "-v, --version", "display the version number");

  program.command("init").action(async () => {
    const spinner = ora("Cloning the Appwrite Manager repository...").start();

    const git: SimpleGit = simpleGit();

    try {
      await git.clone(
        "https://github.com/NiazMorshed2007/appwrite-manager",
        "./appwrite-manager"
      );
      spinner.succeed("Repository cloned successfully!");
      displayGradientText();
      console.log("\nNext steps:");
      console.log(
        gradient("green", "green").multiline("> cd appwrite-manager")
      );
      console.log(gradient("green", "green").multiline("> pnpm i"));
      console.log(gradient("green", "green").multiline("> pnpm dev"));
    } catch (error) {
      spinner.fail("Failed to clone repository.");
      console.error(error);
    }
  });

  program.parse();
}

function displayGradientText() {
  console.log(
    gradient("cyan", "blue").multiline(
      figlet.textSync("Appwrite Manager", "Standard")
    )
  );
}

main();

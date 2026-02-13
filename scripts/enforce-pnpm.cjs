const userAgent = process.env.npm_config_user_agent || ""

if (!userAgent.includes("pnpm")) {
  console.error("\nThis project uses pnpm only.")
  console.error("Run: pnpm install\n")
  process.exit(1)
}

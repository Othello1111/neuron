// App commands, input from Menu or other places.
// In many cases a command comes from the app shell and is sent to renderer process with channel.
enum Command {
  ShowAbout = 'show-about',
  ShowPreferences = 'show-preferences',
  ShowTerminal = 'show-terminal',
  OpenNervosWebsite = 'open-nervos-website',
  OpenSourceCodeReposity = 'open-sourcecode-reposity',
  SetUILocale = 'set-ui-language',
}

export default Command

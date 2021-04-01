# GameIcon Picker

A searchable interface for getting icons from GameIcon.net using Kyle Kemp's web font implementation

The icons used here are developed and maintained by Delapouite and Lorc from [https://game-icons.net/](Game-Icons.net). The webfont version of the icons is provided by [https://seiyria.com/gameicons-font/](Kyle Kemp). This tool provides a quick way to search and copy icons in various formats.

## Installation

To install the application clone the repository and run `npm start` from the command line.

The application will then start on [http://localhost:3000/](http://localhost:3000/) 



> The application is also available on GitHub pages: [https://gcoulby.github.io/game-icon-picker/](https://gcoulby.github.io/game-icon-picker/)



## Using the tool

Choose a copy mode from the dropdown in the navbar click on an icon to copy. The search box can be used to filter the icons.

The Available copy modes are for the icon `ancient sword`:

| Copy Mode       | Example Output                                               |
| --------------- | ------------------------------------------------------------ |
| Icon Name only  | `ancient-sword`                                              |
| Full            | `game-icon game-icon-ancient-sword`                          |
| i Element       | `<i class="game-icon game-icon-ancient-sword"></i>`          |
| React i Element | `<i className="game-icon game-icon-ancient-sword"></i>`      |
| Game Icon URL   | `https://game-icons.net/search.html?q=ancient-sword`         |
| SVG Icon        | `https://raw.githubusercontent.com/seiyria/gameicons-font/master/test/svg/ancient-sword.svg` |


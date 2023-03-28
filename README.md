# Tested on node v18.11.0

# Steps that i took in completing the task

1.  Looked through the project's structure and tried to follow the example.

2.  Created and styled the base component's which i need for the task.

3.  Based on the agencyselection.png created the desktop design.

4.  Based on the mobileagencyselection.png created the mobile design.

5.  Added functions needed for the design and a hook folder with useMediaQuery hook.

6.  Fixed semantics, styles, cleaned up and rewrote components.

7.  Added mobile design for the Hero section.

8.  Converted the project to typescript and the latest version of next.
    -There is a separate branch without the updated next and typescript if there is a problem with this one.

# The section that you need to create is shown in **agencyselection.png**

1. The main Section must be placed in the folder sections.
2. All collections of components must be created and placed in the collections folder. (for example such things are Forms, Menus, etc. because they contain multiple other components within themselves, a form contains inputs, checkboxes, radio buttons, buttons and so on, that is making it a _collection of components_)
3. All base components that are making up collections of components go to components folder - these are Typography, Buttons, Checkboxes and other base elements.

You will find the desktop and mobile designs in the resources folder.
That folder is not part of the project, its there for your convenience
agencyselection.png and mobileagencyselection.png show you the layout of the section that you must build
background.png and video.png are assets for you to use

Every component that you create must follow the conventions in the project:

- Must have its own folder
- Must have index.js exporting that component
- Must have elements.jsx where all of the components used to create that component are first imported and styled
- The final component should only be importing all the components that it needs from "./elements"

Feel free to reuse components within the project or entirely recreate your own.

For images use the Image component imported from "next/image"

The section should collapse into mobile layout under 1024px width (the Hero section currently within the project is not mobile friendly, that should not concern you)

Create your own repository, share the link and commit regularly as you are making progress

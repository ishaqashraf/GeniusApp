
# GeniusApp

GeniusApp is a React Native application that showcases workshops using the Atomic Design pattern. It includes a simple navigation structure to browse through the workshop list and view detailed information about each workshop.

## Project Structure

The project is organized using the Atomic Design methodology, which is a methodology for creating design systems in a structured manner. The structure consists of the following layers:

1. **Atoms:** Basic building blocks of the application, such as individual workshop items.
2. **Molecules:** Combine atoms to create more complex components, such as the WorkshopList component.
3. **Organisms:** Further combine molecules to create larger components, like the WorkshopListScreen.
4. **Templates:** Combine organisms to create templates for specific screens, like WorkshopDetailTemplate.
5. **Pages:** The top-level pages of the application that use templates, such as App.js.

## Navigation

The navigation is handled using React Navigation, a popular navigation library for React Native. The stack navigator is used to navigate between screens, allowing users to browse the list of workshops and view detailed information for each workshop.


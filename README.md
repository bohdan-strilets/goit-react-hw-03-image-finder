## Image search

Write an application to search for images by keyword. Create Components
<Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> and <Modal>.

## Pixabay API statement

For HTTP requests, use the public image search service
[Pixabay](https://pixabay.com/api/docs/). Register and get private access key.

The URL string of the HTTP request.

```bash
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

The Pixabay API supports pagination, the default `page` parameter is `1`. Let 12
objects come in the response, set in the `per_page` parameter. Not forget that
when searching for a new keyword, you need to reset the value `page` to `1`.

In response from api comes an array of objects in which you are only interested
in the following properties.

- `id` - unique identifier
- `webformatURL` - link to a small image for the list of cards
- `largeImageURL` - link to a large image for the modal window

## Description of the `<Searchbar>` component

The component accepts one prop `onSubmit` - a function to pass the value of the
input when submitting the form.

## Description of the `<ImageGallery>` component

List of image cards.

## Description of the `<ImageGalleryItem>` component

A component of a list item with an image.

## Description of the `<Button>` component

When you click on the `Load more` button, the next portion should be loaded
images and render along with the previous ones. The button should only render
when there are some loaded images. If the array of images is empty, the button
is not rendered.

## Description of the `<Loader>` component

The spinner component is displayed while the images are loading. Use any
finished component, for example
[react-loader-spinner](https://github.com/mhnpd/react-loader-spinner) or
whatever another.

## Description of the `<Modal>` component

Clicking on a gallery item should open a modal window with a dark overlay and
display a larger version of the image. The modal should close by pressing the
`ESC` key or by clicking on the overlay.

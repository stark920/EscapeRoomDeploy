Quill.register('modules/imageUploader', ImageUploader);

const uploadImgPath =
  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image'],
];

const editor = new Quill('#description', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    toolbar: toolbarOptions,
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(uploadImgPath);
          }, 1000);
        });
      },
    },
    imageResize: {
      displaySize: true,
    },
  },
});

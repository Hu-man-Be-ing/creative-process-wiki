import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const EditThisPage: QuartzComponentConstructor = () => {
  function EditThisPageComponent(props: QuartzComponentProps) {
    const slug = props.fileData.slug
    const repo = "Hu-man-Be-ing/creative-process-wiki"
    const branch = "main"

    const filePath = `content/${slug}.md`
    const editUrl = `https://github.com/${repo}/edit/${branch}/${filePath}`

    return (
      <div class="edit-this-page">
        <a href={editUrl} target="_blank" rel="noopener noreferrer">
          Edit this page on GitHub
        </a>
      </div>
    )
  }

  return EditThisPageComponent
}

export default EditThisPage
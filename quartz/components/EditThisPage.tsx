import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const EditThisPage: QuartzComponentConstructor = () => {
  function EditThisPageComponent(props: QuartzComponentProps) {
    const repo = "Hu-man-Be-ing/creative-process-wiki"
    const branch = "main"

    const relativePath = props.fileData.relativePath
    if (!relativePath) return null

    const editUrl = `https://github.com/${repo}/edit/${branch}/content/${relativePath}`

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
<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Files marked `// @ts-nocheck — legacy remixed code` (old portal/admin/staff code) reference tables not in this database; remove the marker and re-type when rebuilding that area. Why: keeps the build green without rewriting dormant code.

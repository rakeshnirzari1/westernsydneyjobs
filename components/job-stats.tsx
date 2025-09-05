export function JobStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
      <div className="text-center p-4 bg-card rounded-lg border border-border">
        <div className="text-2xl font-bold text-accent mb-1">2,547</div>
        <div className="text-sm text-muted-foreground">Total Jobs</div>
      </div>
      <div className="text-center p-4 bg-card rounded-lg border border-border">
        <div className="text-2xl font-bold text-accent mb-1">156</div>
        <div className="text-sm text-muted-foreground">New Today</div>
      </div>
      <div className="text-center p-4 bg-card rounded-lg border border-border">
        <div className="text-2xl font-bold text-accent mb-1">847</div>
        <div className="text-sm text-muted-foreground">Companies</div>
      </div>
      <div className="text-center p-4 bg-card rounded-lg border border-border">
        <div className="text-2xl font-bold text-accent mb-1">23</div>
        <div className="text-sm text-muted-foreground">Categories</div>
      </div>
    </div>
  )
}

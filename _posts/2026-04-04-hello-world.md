---
layout: post
title: "Hello, World!"
date: 2026-04-04
description: "A first post to test the blog setup, with some Swift code."
---

This is the first post on this blog. Let's make sure syntax highlighting works with a Swift example.

## A simple Swift snippet

```swift
import SwiftUI

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        VStack(spacing: 16) {
            Text("Count: \(count)")
                .font(.title)
            Button("Increment") {
                count += 1
            }
        }
        .padding()
    }
}
```

That's it for now. More posts to come.

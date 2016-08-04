//
//  ViewController.m
//  LoveApp
//
//  Created by Andrew on 16/8/4.
//  Copyright © 2016年 Andrew. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
   
    NSString *urlString = @"http://localhost:8081/index.ios.bundle";
    RCTRootView *view = [[RCTRootView alloc] initWithBundleURL:[NSURL URLWithString:urlString] moduleName:@"LoveApp" initialProperties:nil launchOptions:nil];
    view.frame = CGRectMake(30, 50, 300, 20);
    view.center = self.view.center;
    [self.view addSubview:view];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
